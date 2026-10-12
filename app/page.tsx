import Link from "next/link";


export default function Home() {
  return (
    <div >
      <h1 >User Management System</h1>

      <p>Welcome to our application.</p>
      
      <Link href="/dashboard">
        Dashboard
      </Link>      

    </div>
  );
}
