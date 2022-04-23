import { initializeApp} from 'firebase/app'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCrZ6vzBPFMNdwF82Ue6bj_l0or_GR4kt4',
    authDomain: 'galleryreact-a4d0f.firebaseapp.com',
    projectId: 'galleryreact-a4d0f',
    storageBucket: 'galleryreact-a4d0f.appspot.com',
    messagingSenderId: '910865544902',
    appId: '910865544902:web:4b08ea3687c470351749c7'
  };
  

const firebaseApp =  initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)