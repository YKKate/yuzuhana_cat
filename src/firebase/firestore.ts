import './index'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

const firebaseDB = getFirestore()

const getIGData = async function () {
  const querySnapshot = await getDocs(collection(firebaseDB, 'instagram'))

  const igData = querySnapshot.docs.map(doc => ({
    ...doc.data()
  }))
  return igData
}

export { getIGData }
