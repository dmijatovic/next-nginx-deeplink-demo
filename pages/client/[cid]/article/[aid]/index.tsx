import {useRouter} from 'next/router'

export default function Article(){
  const router = useRouter()
  const {cid,aid} = router.query

  function goBack(){
    router.push('/client/[cid]/',`/client/${cid}`)
  }

  function goHome(){
    router.push("/")
  }

  return (
    <section>
      <h1>Acticle {aid} from the client {cid}</h1>

      <button onClick={goBack} >Go back</button>

      <button onClick={goHome} >Go home</button>
    </section>
  )
}