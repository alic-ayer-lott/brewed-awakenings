import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.Id}">${employee.name}</li>` // added a . between employee and ID for property
    }

    html += "</ul>"

    return html // added an "l" to "htm"
}

