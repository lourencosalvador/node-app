export async function Tags(){
  const response = await fetch('http://localhost:5000/tags', {
    next: {
      tags: ['get-tags']
    }
  });
  const data = await response.json();
 
  return(
    <ul>
      {data.map((tag: any) => (
        <li key={tag.id}>{tag.slug}</li>
      ))}
    </ul>
  )
}