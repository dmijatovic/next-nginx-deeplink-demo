import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Page404(){
  const router = useRouter()
  const [content,setContent]=useState("")
  useEffect(()=>{
    if (router){
      debugger
      // Next router
      console.log("Next router...route...",router.route)
      console.log("Next router...pathname...",router.pathname)
      console.log("Next router...asPath...",router.asPath)
      console.log("Next router...query...",router.query)
      // Location
      console.log("location...href...",location.href)
      console.log("location...pathname...",location.pathname)
      console.log("location...host...",location.host)
      console.log("location...hash...",location.hash)
      console.log("location...port...",location.port)
      console.log("location...search...",location.search)

      // console.log("router...",router)
      if (router.route==="/404" && router.asPath!="/404"){
        if (location.pathname==="/404" &&
          location.search.includes("deeplink=true")){
          //DO NOTHING to avoid redirect loop
          console.error("EVEN redirect to 404 page failed!")
        }else if (location.search.includes("deeplink=true")){
          console.warn("ALREADY TRIED REDIRECT with Next router using deeplink param!",location.search)
          //send to 404 page
          setContent(
            <section>
              <h1>Custom 404 page after trying rederect with Next router</h1>
            </section>
          )
          // router.push("/404?deeplink=true")
        }else{
          const asPath = router.asPath
          const url = router.pathname
          let newUrl = asPath
          //check is parameters are already present in url
          if (location.search && location.search.length > 0){
            //add to params
            newUrl+="&deeplink=true"
          }else{
            // first param
            newUrl+="?deeplink=true"
          }
          console.log(`push to ${newUrl}`)
          router.push(newUrl)
        }
      }
    }
  },[router])

  return content
}