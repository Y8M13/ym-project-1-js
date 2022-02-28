//alert('Hola Hola')


/*** Globals ***/
const baseUrl = "http://localhost:3000";
let tasks = [];

/*** NODE Getters ***/                                 // a function that grabs a node
const mainDiv = () => document.getElementById("main"); //arrow function used to grab the div tag on the HTML at any time
const homePageLink = () => document.getElementById("home-page-link");
const taskLogLink = () => document.getElementById("task-log-link");
const taskFormLink = () => document.getElementById("task-form-link");
const dateInput = () => document.getElementById("date");
const nameInput = () => document.getElementById("name");
const categoryInput = () => document.getElementById("category");
const statusInput = () => document.getElementById("status");
const priorityInput = () => document.getElementById("priority");
const deadlineInput = () => document.getElementById("deadline");
const commentsInput = () => document.getElementById("comments");




/*** Templates ***/                                   //a reusable block of code can be repeated throughout the page
// const homePageTemplate = () => {
//     return `
//     <h1 class="center-align">Welcome to my Task Manager</h1> 
//     `
// }                                                     //backticks are the best way to make templates
                                                      //templates are used to return strings. I can also use multi-lined strings

// const taskLogTemplate = () => {                    //Old Version
//     return `
//     <h1 class="center-align">Task Log</h1>
//       <table class="highlight">
//       <thead>
//       <tr>
//           <th class="center-align">Date</th>
//           <th class="center-align">Name</th>
//           <th class="center-align">Category</th>
//           <th class="center-align">Status</th>
//           <th class="center-align">Priority</th>
//           <th class="center-align">Deadline</th>
//           <th class="center-align">Comments</th>
//       </tr>
//       </thead>

//       <tbody>
//         ${ renderTasks() }
//       </tbody>
// </table>
//     `
// }                                                      


const newTaskTemplate = (task) => {                                 //New Updates:
    const tr = document.createElement("tr");
    const tdDate = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdStatus = document.createElement("td");
    const tdPriority = document.createElement("td");
    const tdDeadline = document.createElement("td");
    const tdComments= document.createElement("td");
    tdDate.innerText = task.date;
    tdName.innerText = task.name;
    tdCategory.innerText = task.category;
    tdStatus.innerText = task.status;
    tdPriority.innerText = task.priority;
    tdDeadline.innerText = task.deadline;
    tdComments.innerText = task.comments;
    tr.appendChild(tdDate);
    tr.appendChild(tdName);
    tr.appendChild(tdCategory);
    tr.appendChild(tdStatus);
    tr.appendChild(tdPriority);
    tr.appendChild(tdDeadline);
    tr.appendChild(tdComments);
    return tr;
}

// const newTaskTemplate = (task) => {                             //Old Version:
//      return `
//     <tr>
//          <td>${ task.date }</td>
//          <td>${ task.name }</td>
//          <td>${ task.category }</td>
//          <td>${ task.status }</td>
//          <td>${ task.priority }</td>
//          <td>${ task.deadline }</td>
//          <td>${ task.comments }</td>
//      </tr>
//      `
// }


/*** Renderers ***/

const renderHomePage = ()=> {
    mainDiv().innerHTML = " "                         //New Update:  this is set to an empty string to clear out all of the HTML between the tags
    const h1 = document.createElement("h1");
    h1.classList.add("center-align");
    h1.innerText = "Welcome to my Task Manager"  
    mainDiv().appendChild(h1);                     
}

// const renderHomePage = () => {                       //Old Version:  renders the homepage to the div tag in the HTML.
//    mainDiv().innerHTML = homePageTemplate();         //the h1 string will be returned
// }                                                    //this renderHomePage function is reusable on click and when the DOM loads to show our home page by default

const renderTaskLogPage = async () => {
    await loadTasks();
    mainDiv().innerHTML = " ";
    const h1 = document.createElement("h1");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const thDate = document.createElement("th");
    const thName = document.createElement("th");
    const thCategory = document.createElement("th");
    const thStatus = document.createElement("th");
    const thPriority = document.createElement("th");
    const thDeadline = document.createElement("th");
    const thComments = document.createElement("th");
    const tbody = document.createElement("tbody");
    h1.innerText = "Task Log"
    thDate.innerText = "Date";
    thName.innerText = "Name";
    thCategory.innerText = "Category";
    thStatus.innerText = "Status";
    thPriority.innerText = "Priority";
    thDeadline.innerText = "Deadline";
    thComments.innerText = "Comments";
    table.classList.add("highlight");
    tr.appendChild(thDate);
    tr.appendChild(thName);
    tr.appendChild(thCategory);
    tr.appendChild(thStatus);
    tr.appendChild(thPriority);
    tr.appendChild(thDeadline);
    tr.appendChild(thComments);
    thead.appendChild(tr);
    table.appendChild(thead);
    tasks.forEach(task => tbody.appendChild(newTaskTemplate(task)))    //How each table row will be added
    table.appendChild(tbody);
    mainDiv().appendChild(h1);
    mainDiv().appendChild(table);
}


// const renderTaskLogPage = () => {                       //Old Version:
//     mainDiv().innerHTML = taskLogTemplate();
// }

// const renderTasks = () => {                               //Old Version: 
//     return tasks.map(task => newTaskTemplate(task) )
// }

const renderTaskForm = () => {
//    alert("The Task Form has been loaded!")                    //A message box will be displayed to confirm that the "Add New Task" link works.  test..test..test..
//                                                                 //This will allow us to see that the code has atleast made it to this function. yay!
    mainDiv().innerHTML = " ";
    const h1 = document.createElement("h1");
    const form = document.createElement("form");
    const dateDiv = document.createElement("div");
    const dateI = document.createElement("i");
    const dateInput = document.createElement("input");
    const dateLabel = document.createElement("label");
    const nameDiv = document.createElement("div");
    const nameI = document.createElement("i");
    const nameInput = document.createElement("input");
    const nameLabel = document.createElement("label");
    const categoryDiv = document.createElement("div");
    const categoryI = document.createElement("i");
    const categoryInput = document.createElement("input");
    const categoryLabel = document.createElement("label");
    const statusDiv = document.createElement("div");
    const statusI = document.createElement("i");
    const statusInput = document.createElement("input");
    const statusLabel = document.createElement("label");
    const priorityDiv = document.createElement("div");
    const priorityI = document.createElement("i");
    const priorityInput = document.createElement("input");
    const priorityLabel = document.createElement("label");
    const deadlineDiv = document.createElement("div");
    const deadlineI = document.createElement("i");
    const deadlineInput = document.createElement("input");
    const deadlineLabel = document.createElement("label");
    const commentsDiv = document.createElement("div");
    const commentsI = document.createElement("i");
    const commentsInput = document.createElement("input");
    const commentsLabel = document.createElement("label");
    const submitButton = document.createElement("input");
    const submitButtonI = document.createElement("i");

    h1.className = "center-align";
    dateDiv.className = "input-field";
    dateI.className = "material-icons prefix";
    nameDiv.className = "input-field";
    nameI.className = "material-icons prefix";
    categoryDiv.className = "input-field";
    categoryI.className = "material-icons prefix";
    statusDiv.className = "input-field";
    statusI.className = "material-icons prefix";
    priorityDiv.className = "input-field";
    priorityI.className = "material-icons prefix";
    deadlineDiv.className = "input-field";
    deadlineI.className = "material-icons prefix";
    commentsDiv.className = "input-field";
    commentsI.className = "material-icons prefix";
    submitButton.className = "btn waves-effect waves-light margin-right";
    submitButtonI.className = "material-icons right";

    //dateInput.setAttribute("id", "icon_prefix");
    dateInput.setAttribute("id", "date");
    dateInput.setAttribute("type", "text");
    dateLabel.setAttribute("for", "icon_prefix");
    //nameInput.setAttribute("id", "icon_prefix");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("type", "text");
    nameLabel.setAttribute("for", "icon_prefix");
    //categoryInput.setAttribute("id", "icon_prefix");
    categoryInput.setAttribute("id", "category");
    categoryInput.setAttribute("type", "text");
    categoryLabel.setAttribute("for", "icon_prefix");
    //statusInput.setAttribute("id", "icon_prefix");
    statusInput.setAttribute("id", "status");
    statusInput.setAttribute("type", "text");
    statusLabel.setAttribute("for", "icon_prefix");
    //priorityInput.setAttribute("id", "icon_prefix");
    priorityInput.setAttribute("id", "priority");
    priorityInput.setAttribute("type", "text");
    priorityLabel.setAttribute("for", "icon_prefix");
    //deadlineInput.setAttribute("id", "icon_prefix");
    deadlineInput.setAttribute("id", "deadline");
    deadlineInput.setAttribute("type", "text");
    deadlineLabel.setAttribute("for", "icon_prefix");
    //commentsInput.setAttribute("id", "icon_prefix");
    commentsInput.setAttribute("id", "comments");
    commentsInput.setAttribute("type", "text");
    commentsLabel.setAttribute("for", "icon_prefix");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Create Task" );
    submitButton.setAttribute("name", "action");
     
     
    h1.innerText = "Add New Task";
    dateI.innerText = "event";
    dateLabel.innerText = "Date";
    nameI.innerText = "assignment";
    nameLabel.innerText = "Name";
    categoryI.innerText = "archive";
    categoryLabel.innerText = "Category";
    statusI.innerText = "aspect_ratio";
    statusLabel.innerText = "Status";
    priorityI.innerText = "assistant_photo";
    priorityLabel.innerText = "Priority";
    deadlineI.innerText = "timer";
    deadlineLabel.innerText = "Deadine";
    commentsI.innerText = "insert_comment";
    commentsLabel.innerText = "Comments";
    submitButtonI.innerText = "send";
    submitButton.innerText = "Create Task";
   

    dateDiv.appendChild(dateI);
    dateDiv.appendChild(dateInput);
    dateDiv.appendChild(dateLabel);
    nameDiv.appendChild(nameI);
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameLabel);
    categoryDiv.appendChild(categoryI);
    categoryDiv.appendChild(categoryInput);
    categoryDiv.appendChild(categoryLabel);
    statusDiv.appendChild(statusI);
    statusDiv.appendChild(statusInput);
    statusDiv.appendChild(statusLabel);
    priorityDiv.appendChild(priorityI);
    priorityDiv.appendChild(priorityInput);
    priorityDiv.appendChild(priorityLabel);
    deadlineDiv.appendChild(deadlineI);
    deadlineDiv.appendChild(deadlineInput);
    deadlineDiv.appendChild(deadlineLabel);
    commentsDiv.appendChild(commentsI);
    commentsDiv.appendChild(commentsInput);
    commentsDiv.appendChild(commentsLabel);

    //console.log(form);

    form.appendChild(dateDiv);
    form.appendChild(nameDiv);
    form.appendChild(categoryDiv);
    form.appendChild(statusDiv);
    form.appendChild(priorityDiv);
    form.appendChild(deadlineDiv);
    form.appendChild(commentsDiv);
    form.appendChild(submitButton);

    form.addEventListener("submit", submitFormEvent);

    mainDiv().appendChild(h1);
    mainDiv().appendChild(form);


//     //------------------------------------------------------------------------
   //<h1 class="center-align">Add New Task</h1>                   
//    <form>
//       {/* <div class="input-field">                  
//       <i class="material-icons prefix">event</i>
//        <input id="icon_prefix" type="text">
//       <label for="icon_prefix">Date</label>
//        </div> */}
//        <div class="input-field">                      
//       <i class="material-icons prefix">assignment</i>
//        <input id="icon_prefix" type="text">
//        <label for="icon_prefix">Name</label>
//        </div>
//        <div class="input-field">                      
//        <i class="material-icons prefix">archive</i>
//        <input id="icon_prefix" type="text">
//        <label for="icon_prefix">Category</label>
//        </div>
//        <div class="input-field">                      
//        <i class="material-icons prefix">aspect_ratio</i>
//        <input id="icon_prefix" type="text">
//        <label for="icon_prefix">Status</label>
//        </div>
//        <div class="input-field">                      
//        <i class="material-icons prefix">assistant_photo</i>
//        <input id="icon_prefix" type="text">
//       <label for="icon_prefix">Priority</label>
//        </div>
//        <div class="input-field">                      
//        <i class="material-icons prefix">timer</i>
//       <input id="icon_prefix" type="text">
//        <label for="icon_prefix">Deadline</label>
//        </div>
//        <div class="input-field">                      
//        <i class="material-icons prefix">insert_comment</i>
//        <input id="icon_prefix" type="text">
//        <label for="icon_prefix">Comments</label>
//        </div>
//        <div>
//        <button class="btn waves-effect waves-light margin-right" type="submit" name="action">Submit
//            <i class="material-icons right">send</i>
//          </button>
//        </div>              
//     </form>                                                            
}                                                             

/*** Events ***/
const loadTasks = async () => {
    const resp = await fetch(baseUrl + "/tasks")
    const data = await resp.json();
     tasks = data; 
 }

const homePageLinkEvent = () => {
   homePageLink().addEventListener("click", (e) => {
    e.preventDefault();                                          //used to keep js from reloading and refreshing
    renderHomePage();
   })
}

// const taskLogLinkEvent = () => {
//     taskLogLink().addEventListener("click", async (e) => {
//         e.preventDefault();
//         await loadTasks();                                          //May need to remove this
//         renderTaskLogPage();
        
//     })
// }

const taskLogLinkEvent = () => {
    taskLogLink().addEventListener("click", (e) => {
        e.preventDefault();
        renderTaskLogPage();
    })
}


const taskFormLinkEvent = () => {
   taskFormLink().addEventListener("click", (e) => {
       e.preventDefault();
       renderTaskForm();
   })
}

const submitFormEvent = e => {
    e.preventDefault();                                                        //because I do not want the form page to refresh
    //const [date, name, category, status, priority, deadline, comments] = e.target.children;    //how to do mass assignment
    
    // console.log("date", date)
    // console.log("name", name)
    // console.log("category", category)
    // console.log("status", status)
    // console.log("priority", priority)
    // console.log("deadline", deadline)
    // console.log("comments", comments)

    // console.log("date", date.children[0].value)
    // console.log("name", name.children[0].value)
    // console.log("category", category.children[0].value)
    // console.log("status", status.children[0].value)
    // console.log("priority", priority.children[0].value)
    // console.log("deadline", deadline.children[0].value)
    // console.log("comments", comments.children[0].value)

    console.log("date", dateInput().value)
    console.log("name", nameInput().value)
    console.log("category", categoryInput().value)
    console.log("status", statusInput().value)
    console.log("priority", priorityInput().value)
    console.log("deadline", deadlineInput().value)
    console.log("comments", commentsInput().value)
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date: dateInput().value,
            name: nameInput().value,
            category: categoryInput().value,
            status: statusInput().value,
            priority: priorityInput().value,
            deadline: deadlineInput().value,
            comments: commentsInput().value
        })
    })
    .then(resp => resp.json())
    .then(task => {
      //console.log(task)  
      renderTaskLogPage();
    })
    

    //console.log(e.target.children)
    
}

//debugger;

/*****************/

/*** WHEN THE DOM LOADS ***/
document.addEventListener("DOMContentLoaded", () => {   //when the page loads this code will render the homepage
     renderHomePage();                          //When this is commented out.. once we refresh the page the Home Page text is NOT displayed.
     homePageLinkEvent();
     taskLogLinkEvent();
     taskFormLinkEvent();
     //loadTasks();                                 //update:  will need to comment this out

})