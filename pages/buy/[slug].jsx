import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  const slug = router.query.slug

  return <p>Post: {slug}</p>
}