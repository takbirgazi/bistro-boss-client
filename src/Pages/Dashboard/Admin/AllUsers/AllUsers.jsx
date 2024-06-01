
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';


const AllUsers = () => {
    const axiousSucure = useAxiosSecure();
    const { data:user=[], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const result = await axiousSucure.get('/users');
            return result.data
        }
    })
  const dltUserHndlr = user => {
    axiousSucure.delete(`/users/${user._id}`)
      .then(() => {
        console.log("Data is deleted")
        refetch();
    })
  }
  
  const makeAdminHndler = (user) => {
    axiousSucure.patch(`/users/admin/${user._id}`)
      .then(() => {
        console.log(user)   
        refetch();
    })

  }
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Total Users {user?.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>S.N</th>
                         <th>Name</th>
                          <th>Email</th>
                          <th>Favorite Color</th>
                          <th></th>
                        </tr>
                      </thead>
              <tbody>
                {
                  user?.map((user, ind) => <tr key={user._id}>
                    <th>{ ind +1 }</th>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src="" alt="Image" />
                                </div>
                              </div>
                              <div>
                            <div className="font-bold">{user.name}</div>
                                <div className="text-sm opacity-50">United States</div>
                              </div>
                            </div>
                          </td>
                    <td>{ user.email}</td>
                    <td><button onClick={() => makeAdminHndler(user)}>{ user.role == "Admin" ? "Admin" : "Make Admin"}</button></td>
                          <th>
                            <button onClick={()=>dltUserHndlr(user)} className="btn btn-ghost btn-xs">delete</button>
                          </th>
                        </tr>)
                }
                        </tbody>
                      </table>
                    </div>
            </div>
        </div>
    );
};

export default AllUsers;