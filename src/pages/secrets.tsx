const Secrets = (): JSX.Element => {
  const appEnv = process.env.APP_ENV
  if (!appEnv) return <p>No app env present!</p>
  return <p>App env = {appEnv}</p>
}

export default Secrets
