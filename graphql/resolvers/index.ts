import { merge } from 'lodash';
import {resolvers as helloResolver} from './hello';
import {createUser,authUser,validateToken,getUser,getListUsers,deleteuser} from './userResolvers';
import {createFile,getFileListByUser,getFileById,deleteFile} from './fileResolver'
import {createGame,deleteGame,getGameById,getAllGame} from './gameResolver'

const emptyResolvers ={}

const resolvers = merge(emptyResolvers,helloResolver,createUser,
                        authUser,validateToken,getUser,getListUsers,deleteuser,
                        createFile,getFileListByUser,getFileById,deleteFile,
                        createGame,deleteGame,getGameById,getAllGame)


export default resolvers