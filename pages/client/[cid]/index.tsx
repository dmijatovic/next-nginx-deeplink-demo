import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Client(){
  const router = useRouter()
  const {cid} = router.query
  const aid = 12345

  function forward(){
    router.push('/client/[cid]/article/[aid]',`/client/${cid}/article/${aid}`)
  }

  function home(){
    router.push("/")
  }

  console.log("router...",router)

  return (
    <section>
      <h1>Client {cid}</h1>

      <button onClick={forward}>Open article {aid}</button>

      <button onClick={home}>Home</button>
    </section>
  )
}