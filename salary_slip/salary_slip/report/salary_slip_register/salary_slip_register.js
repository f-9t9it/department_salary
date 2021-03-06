// Copyright (c) 2016, indictranstech and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Salary Slip Register"] = {
	  "filters": [
                {
                        "fieldname":"date_range",
                        "label": __("Date Range"),
                        "fieldtype": "DateRange",
                        "default": [frappe.datetime.add_months(frappe.datetime.get_today(),-1), frappe.datetime.get_today()],
                        "reqd": 1
                },
                {
                        "fieldname":"employee",
                        "label": __("Employee"),
                        "fieldtype": "Link",
                        "options": "Employee"
                },
                {
                        "fieldname":"company",
                        "label": __("Company"),
                        "fieldtype": "Link",
                        "options": "Company",
                        "default": frappe.defaults.get_user_default("Company")
                },
                {
                        "fieldname":"department",
                        "label": __("Department"),
                        "fieldtype": "Link",
                        "options": "Department"
                },
                 {
                        "fieldname":"designation",
                        "label": __("Designation"),
                        "fieldtype": "Link",
                        "options": "Designation"
                },
		 {
                        "fieldname":"slip_status",
                        "label": __("Status"),
                        "fieldtype": "Select",
			"reqd": 1,
			"default":"Submitted",  
	                "options": " \nDraft\nSubmitted"
                }



        ]

}
