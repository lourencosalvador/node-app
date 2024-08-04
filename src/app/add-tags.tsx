import { revalidateTag } from "next/cache";
import { AddtagsButtom } from "./add-tag-buttom";


export function AddTags() {
  async function handleAddTags(form: FormData) {
    'use server';
    
    const slug = form.get('slug');
    if (!slug) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await fetch('http://localhost:5000/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ slug })
    });


    revalidateTag('get-tags');
  }

  return (
    <form action={handleAddTags}>
      <input
        type="text"
        className="text-zinc-900 placeholder:text-zinc-900"
        name="slug"
        placeholder="slug da tag"
      />
    <AddtagsButtom />
    </form>
  );
}
