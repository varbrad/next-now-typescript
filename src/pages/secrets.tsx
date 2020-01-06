import { NextPage } from 'next'

interface Props {
  appEnv?: string
}

const Secrets: NextPage<Props> = ({ appEnv }) => {
  if (!appEnv) return <p>No app env present!</p>
  return <p>App env = {appEnv}</p>
}

Secrets.getInitialProps = (): Props => ({
  appEnv: process.env.APP_ENV,
})

export default Secrets
