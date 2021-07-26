import { getEmployees } from "./database.js"
import { Products } from "./Products.js"

const employees = getEmployees()

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("employee")) {
//             const [, employeeId] = itemClicked.id.split("--")

//             for (const employee of employees) {
//                 if (employee.Id === parseInt(employeeId)) {

//                     const employeeOrders = orders.filter(
//                         (order) => {
//                             if (order.employeeID === employee.id) {
//                                 return true
//                             }
//                         }
//                     )
//                     window.alert(`${employee.name} sold ${} products `)
//                 }
//             }
//         }
//     }
// )

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.Id}">${employee.name}</li>` // added a . between employee and ID for property
    }

    html += "</ul>"

    return html // added an "l" to "htm"
}

