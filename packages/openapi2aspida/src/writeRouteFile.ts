import fs from 'fs'
import aspidaBuild from 'aspida/dist/buildTemplate'
import aspidaWrite from 'aspida/dist/writeRouteFile'
import mockBuild from 'aspida-mock/dist/cli/buildRouteFile'
import mockWrite from 'aspida-mock/dist/cli/writeRouteFile'
import { Template } from './buildTemplate'

export default (
  input: string,
  needsMock: boolean,
  trailingSlash: boolean,
  { baseURL, types, files }: Template
) => {
  fs.mkdirSync(input)

  if (types) {
    fs.writeFileSync(`${input}/@types.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${input}/${dirList.slice(0, i + 1).join('/')}`
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    })

    fs.writeFileSync(`${input}/${p.file.join('/')}/${fileName}.ts`, p.methods, 'utf8')
  })

  const config = { input, baseURL, trailingSlash }
  aspidaWrite(aspidaBuild(config))
  if (needsMock) mockWrite(mockBuild(config))
}
