import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Nav.module.css'


const nav = () => {
    const { pathname } = useRouter()

    return (
        <nav className={styles.navigation}>
            <div className={styles.list}>
                <div>
                    <Link href='/'>
                        <a aria-current={pathname === '/' ? 'page' : undefined}>
                            Projects
                        </a>
                    </Link>
                </div>
                <div className={styles.ml1}>
                    <Link href="/blog">
                        <a aria-current={pathname === '/blog' ? 'page' : undefined}>
							Blog
						</a>
                    </Link>
                </div>
            </div>
        </nav>
    )

}

export default nav;