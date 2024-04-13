import mongoose from "mongoose";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/app/models/User";

export async function PUT() {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;


    if ('name' in data) {
        await User.updateOne({email}, {name:data.name});
    }

    return Response.json(true);
}