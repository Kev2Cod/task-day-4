let projects = []

function addProject(event){

    event.preventDefault(); // Mencegah reload

    let projectName = document.getElementById('projectName').value;
    let description = document.getElementById('description').value;
    let image = document.getElementById('inputImage').files;

    image = URL.createObjectURL(image[0]); // Untuk menampilkan gambar

    let project = {
        projectName: projectName,
        description: description,
        image: image
    };
    
    projects.push(project);
    renderProject();
}

function renderProject(){
    document.getElementById('project-card-list').innerHTML = ``;

    for(let dataProject = 0 ; dataProject < projects.length ; dataProject++){
        document.getElementById('project-card-list').innerHTML +=
        `
        <!-- Project-Card -->
            <div class="project-card">
                <img src="${projects[dataProject].image}" alt="Project Image">
                <h4 class="project-name">
                    <a href="detail-project.html">${projects[dataProject].projectName}</a>
                </h4>
                <p class="duration">Durasi : 3 bulan</p>

                <p class="description">${projects[dataProject].description.slice(0,100)}.....</p>

                <!-- Icon-Project -->
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-js-square"></i>
                <!-- End Icon-Project -->

                <!-- Button-Project -->
                <div class="button-project">
                    <button class="btn-aksi">edit</button>
                    <button class="btn-aksi">delete</button>
                </div>
                <!-- End Button-Project -->
            </div>
            <!-- End Project-Card -->
        
        ` 
    }

}