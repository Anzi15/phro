// app/api/deleteBlog/route.js
import { db } from "../../lib/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { NextResponse } from "  /server";

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    try {
        await deleteDoc(doc(db, "blogs", id));
        return NextResponse.json({ message: "Blog post deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting blog post:", error);
        return NextResponse.json({ message: "Failed to delete blog post" }, { status: 500 });
    }
}
