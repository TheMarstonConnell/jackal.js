import { AccountData, OfflineSigner } from '@cosmjs/proto-signing'
import { ICoin, IPayBlock, IPayData, IStorageClientUsage } from '../'
import { DeliverTxResponse } from '@cosmjs/stargate'

export default interface IWalletHandler {
  txAddr26657: string
  queryAddr1317: string
  jackalAccount: AccountData

  checkIfInit (): boolean

  getAccounts (): Promise<readonly AccountData[]>
  getSigner (): OfflineSigner
  getJackalAddress (): string
  getHexJackalAddress (): Promise<string>
  getAllBalances (): Promise<ICoin[]>
  getJackalBalance (): Promise<ICoin>
  getJewelBalance (): Promise<ICoin>
  getPubkey (): string
  asymmetricEncrypt (toEncrypt: ArrayBuffer, pubKey: string): string
  asymmetricDecrypt (toDecrypt: string): ArrayBuffer

  // billing
  buyStorage (forAddress: string, duration: string, bytes: string): Promise<DeliverTxResponse>
  getClientUsage (address: string): Promise<IStorageClientUsage | null>
  getGetPayData (address: string): Promise<IPayData | null>
  getPayBlocks (blockid: string): Promise<IPayBlock | null>

}
