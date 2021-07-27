import { getEmployees } from "./database.js"
import { Products } from "./Products.js"
import { getOrders } from "./database.js"

const employees = getEmployees()

 document.addEventListener(
     "click",
     (clickEvent) => {
         const itemClicked = clickEvent.target
             const [, employeeId] = itemClicked.id.split("--")

             for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const orders = getOrders()
                    const employeeOrders = orders.filter(
                        (order) => {
                            if (order.employeeId === employee.id) {
                               return true
                             }
                         }
                     ).length
                     window.alert(`${employee.name} sold ${employeeOrders} products `)
                }
             }
         }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>` // added a . between employee and ID for property
    }

    html += "</ul>"

    return html // added an "l" to "htm"
}

