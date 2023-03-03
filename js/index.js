const loadTools = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayTools(data.data.tools));

}

const displayTools = tools => {
tools.forEach(tool => console.log(tool));
}

loadTools()