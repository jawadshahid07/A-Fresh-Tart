'use client'
import {useSession} from "next-auth/react";
import Image from "next/image";
import {redirect} from "next/navigation";
import {useState} from "react";

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState(session?.data?.user?.name || '');
    const {status} = session;

    if (status === 'loading') {
        return 'Loading...';
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    const userImage = session.data.user.image;
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Profile
            </h1>
        </section>
    )
}
