import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function ProductsPage() {

    return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
        </tr>
        </thead>
          <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                    src={"/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                {`{product.title}`}
              </div>
            </td>
              <td>{`{product.desc}`}</td>
              <td>{`{product.price`}</td>
              <td>{`{product.createdAt}`}</td>
              <td>{`{product.stock}`}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/productid`}> {/*make productid dynamic*/}
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <input type="hidden" name="id" value={`(product.id)`} />
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
}

export default ProductsPage
