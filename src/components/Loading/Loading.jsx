import styles from './loading.module.css'


export default function Loading() {
return <>

<div className={styles.preloader}>
  <svg
    className={styles.cart}
    role="img"
    aria-label="Shopping cart line animation"
    viewBox="0 0 128 128"
    width="128px"
    height="128px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={8}>
      <g className={styles.cart__track} stroke="hsla(0,10%,10%,0.1)">
        <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
        <circle cx={43} cy={111} r={13} />
        <circle cx={102} cy={111} r={13} />
      </g>
      <g  className={styles.cart__lines} stroke="currentColor">
        <polyline
          className={styles.cart__top}
          points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
          strokeDasharray="338 338"
          strokeDashoffset={-338}
        />
        <g className={styles.cart__wheel1} transform="rotate(-90,43,111)">
          <circle
            className={styles.cart__wheel_stroke}
            cx={43}
            cy={111}
            r={13}
            strokeDasharray="81.68 81.68"
            strokeDashoffset="81.68"
          />
        </g>
        <g className={styles.cart__wheel2} transform="rotate(90,102,111)">
          <circle
            className={styles.cart__wheel_stroke}
            cx={102}
            cy={111}
            r={13}
            strokeDasharray="81.68 81.68"
            strokeDashoffset="81.68"
          />
        </g>
      </g>
    </g>
  </svg>
  <div className={styles.preloader__text}>
    <p className={styles.preloader__msg}>Bringing you the goods…</p>
    <p className={`${styles.preloader__msg} ${styles.preloader__msg__last}`}>
      This is taking long. Something’s wrong.
    </p> 
  </div>
</div>

 </>  
}
