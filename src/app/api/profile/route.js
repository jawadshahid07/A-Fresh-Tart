import mongoose from "mongoose";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT() {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    if ('name' in data) {

    }
}