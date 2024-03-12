import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";

const UsersPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                {`{user.username}`}
              </div>
            </td>
              <td>{`{user.email}`}</td>
              <td>{`{user.createdAt`}</td>
              <td>{`{user.isAdmin}`}</td>
              <td>{`{user.isActive}`}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/userid`}> {/*make userid dynamic*/}
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <input type="hidden" name="id" value={`(user.id)`} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                </div>
              </td>
          </tr>
        </tbody>
      </table>
        <Pagination/>
    </div>
  );
};

export default UsersPage;