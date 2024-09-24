<template>
  <div class="product-detail-infoBox">
    <!-- 摺疊區域 -->
    <div class="product-item-collapsible-lists">
      <product-item-collapsible title="商品特色">
        <p>箱身專利PC+ABS材質</p>
        <p>多段式鋁合金拉桿</p>
        <p>TSA007海關密碼鎖</p>
        <p>專利雙齒防盜拉鍊</p>
        <p>側邊拉鍊收納袋</p>
        <p>側邊軟質手把</p>
        <p>側邊防撞腳墊</p>
        <p>日本頂級靜音大八輪</p>
      </product-item-collapsible>

      <product-item-collapsible title="商品規格">
        <p>品牌：CENTURION百夫長</p>
        <p>品名：28吋旅行箱</p>
        <p>尺寸：28吋 (53 x 31 x 77 cm)</p>
        <p>材質：耐衝擊PC+ABS、尼龍</p>
        <p>商品產地（國）：中國</p>
        <p>商品重（容）量：4.8KG</p>
        <p>容量：88L/擴充後：100L</p>
        <p>重量：4.3kg</p>
        <p>適用身高：150公分以上</p>
        <p>最大承重：建議不超過25公斤</p>
        <p>BSMI商品檢驗標識字號：R55155</p>
      </product-item-collapsible>

      <product-item-collapsible title="購物須知">
        <p>
          請注意！本網站商品數量眾多，多少會產生缺貨或停售之情況，下單成功或匯款成功不代表實質交易完成。我們仍保有保留接受訂單與否的權利。
        </p>
        <p>
          每台電腦因螢幕解析度不同，多少會有些許色差，物品皆以實品顏色為標準，若您是對顏色標準相當嚴格之買家，請謹慎確認再訂購。
        </p>
        <p>下標前請慎選款式及顏色並仔細詳閱商品、價格、運費等相關事宜。</p>
      </product-item-collapsible>

      <product-item-collapsible title="退換貨須知">
        <p>退換貨及訂單相關問題請先與我們聯繫，我們將在第一時間協助後續處理。</p>
        <p>
          原廠外盒及原廠包裝都屬於商品的一部分，遺失、毀損或缺件，都可能影響您退貨的權益，也將依損毀程度扣除所需之整新費用。
        </p>
        <p>
          「猶豫期」非「試用期」，在您還不確定是否要辦理退貨以前，請勿拆封！一經拆封則依消費者保護法之規定，無法享有七天猶豫期之權益且不得辦理退貨。
        </p>
      </product-item-collapsible>
    </div>
  </div>
</template>

<script>
import ProductItemCollapsible from './ProductItemCollapsible.vue'
export default {
  components: {
    ProductItemCollapsible
  }
}
</script>
