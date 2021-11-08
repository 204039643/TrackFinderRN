import React, {useContext, useState, useEffect, useRef} from 'react'
import Realm from 'realm'
import {Track} from '../schema'
import {useAuth} from './AuthProvider'

const TracksContext = React.createContext(null)

const TracksProvider = ({children, projectPartition}) => {
  //   const [tracks, setTracks] = useState([])
  const {user} = useAuth()

  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.
  const realmRef = useRef(null)

  useEffect(() => {
    const config = {
      sync: {
        user: user,
        partitionValue: projectPartition,
      },
    }
    // open a realm for this particular project
    Realm.open(config).then(projectRealm => {
      realmRef.current = projectRealm

      const syncTracks = projectRealm.objects('Track')
      let sortedTracks = syncTracks.sorted('name')
      setTracks([...sortedTracks])
      sortedTracks.addListener(() => {
        setTracks([...sortedTracks])
      })
    })

    return () => {
      // cleanup function
      const projectRealm = realmRef.current
      if (projectRealm) {
        projectRealm.close()
        realmRef.current = null
        setTracks([])
      }
    }
  }, [user, projectPartition])

  const createTrack = newTrackName => {
    const projectRealm = realmRef.current
    projectRealm.write(() => {
      // Create a new task in the same partition -- that is, in the same project.
      projectRealm.create(
        'Track',
        new Track({
          name: newTrackName || 'New Track',
          partition: projectPartition,
        }),
      )
    })
  }

  //   const setTaskStatus = (task, status) => {
  //     // One advantage of centralizing the realm functionality in this provider is
  //     // that we can check to make sure a valid status was passed in here.
  //     if (
  //       ![
  //         Task.STATUS_OPEN,
  //         Task.STATUS_IN_PROGRESS,
  //         Task.STATUS_COMPLETE,
  //       ].includes(status)
  //     ) {
  //       throw new Error(`Invalid status: ${status}`)
  //     }
  //     const projectRealm = realmRef.current

  // projectRealm.write(() => {
  //   task.status = status
  // })
  //   }

  // Define the function for deleting a task.
  const deleteTrack = track => {
    const projectRealm = realmRef.current
    projectRealm.write(() => {
      projectRealm.delete(track)
      setTracks([...projectRealm.objects('Track').sorted('name')])
    })
  }

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <TracksContext.Provider
      value={{
        createTrack,
        deleteTrack,
        // setTaskStatus,
        // tracks,
      }}>
      {children}
    </TracksContext.Provider>
  )
}

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useTracks = () => {
  const track = useContext(TracksContext)
  if (track == null) {
    throw new Error('useTracks() called outside of a TracksProvider?') // an alert is not placed because this is an error for the developer not the user
  }
  return track
}

export {TracksProvider, useTracks}
