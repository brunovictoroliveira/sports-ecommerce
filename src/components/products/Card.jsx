import styles from './Card.module.css'

const Card = ({ product }) => {
  const { image, title, brand, price, oldPrice, discount, rating } = product || {}

  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img
          src={image || '/placeholder.png'}
          alt={title || 'Produto'}
          className={styles.image}
        />
        {discount && <span className={styles.badge}>{discount}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title || 'Título do produto'}</h3>
        {brand && <p className={styles.brand}>{brand}</p>}

        <div className={styles.prices}>
          <span className={styles.price}>{price ? `R$ ${price}` : 'R$ 0,00'}</span>
          {oldPrice && <span className={styles.oldPrice}>{`R$ ${oldPrice}`}</span>}
        </div>

        <div className={styles.footer}>
          {rating != null && <div className={styles.rating}>{rating} ★</div>}

          <div className={styles.actions}>
            <button className={styles.btnPrimary}>Comprar</button>
            <button className={styles.btnGhost} aria-label="Adicionar aos favoritos">❤</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card