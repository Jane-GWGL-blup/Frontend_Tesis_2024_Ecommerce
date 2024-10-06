import React from "react";
import { AdminManageUsers } from "../../components";

const ManageUserPage = () => {
    return (
        <div>
            <h2>Manage Users</h2>
            <div className='divider-admin' />
            <AdminManageUsers />
        </div>
    );
};

export default ManageUserPage;
