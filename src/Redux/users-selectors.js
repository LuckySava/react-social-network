import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.users; // for testing purpose
}

export const getUserSelector = createSelector(getUsers, (users) => {
    return users.filter(u =>true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const isFetching = (state) => {
    return state.usersPage.isFetching
}

export const followingProgress = (state) => {
    return state.usersPage.followingInProgress
}