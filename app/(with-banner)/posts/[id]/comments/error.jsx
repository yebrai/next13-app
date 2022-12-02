'use client'
import style from './Comments.module.css'

export default function Error () {
    return (
        <p className={style.error}>💥 Error loading comments</p>
    )
}