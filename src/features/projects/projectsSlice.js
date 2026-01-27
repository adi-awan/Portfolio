import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      title: "Inventory Management System",
      category: "Web App",
      description: "Full-stack inventory, billing & ledger system built with React, Node.js, MongoDB.",
      image: "/projects/inventory.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "CRM & ERP-Lite Solution",
      category: "Business",
      description: "Custom CRM dashboard with reporting & automation workflows.",
      image: "/projects/crm.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "AI Automation System",
      category: "AI",
      description: "Enterprise AI workflow automation & backend integration.",
      image: "/projects/ai.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Admin Dashboard",
      category: "Web App",
      description: "Responsive admin dashboard for analytics and reporting.",
      image: "/projects/admin.jpg",
      link: "#"
    },
  ],
  filter: "All",
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = projectsSlice.actions
export default projectsSlice.reducer
