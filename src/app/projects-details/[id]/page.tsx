export default async function ProjectDetails({params}: { params: { id: string } }) {
    const res = await fetch("http://localhost:3000/projectsData.json");
    const data = await res.json();

    const project = data.find((p) => p.id === params.id);
    console.log(project);
    return <div>
        <h1>details</h1>
    </div>
}