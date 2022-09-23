import IFolderFileFrame from '../IFolderFileFrame'
import IFileMeta from '../IFileMeta'
import IFileHandlerCore from './IFileHandlerCore'
import IChildDirInfo from '../IChildDirInfo'

export default interface IFolderHandler extends IFileHandlerCore {

  getWhoAmI (): string
  getWhereAmI (): string
  merkleMeBro (): Promise<string>
  getFolderDetails (): IFolderFileFrame
  getChildDirs (): string[]
  getChildFiles (): { [name: string]: IFileMeta }

  makeChildDirInfo (childName: string): IChildDirInfo
  addChildDirs (newDirs: string[]): void
  addChildFiles (newFiles: IFileMeta[]): void
  removeChildDirs (toRemove: string[]): void
  removeChildFiles (toRemove: string[]): void

}