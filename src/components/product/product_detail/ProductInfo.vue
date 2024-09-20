<template>
  <div class="product-info-box">
    <div class="product-info-box-container">
      <div class="product-item-box">
        <div class="product-item">
          <div class="product-item-label-lists">
            <span class="product-item-label">NEW</span>
            <span class="product-item-label">限量特價</span>
            <span class="product-item-label">30% OFF</span>
          </div>

          <!-- 標題 -->
          <div class="product-item-title">
            <span class="title heading"> EXCELL限量版</span>
          </div>

          <!-- price -->
          <div class="product-item-price">
            <span class="original-price">
              <del>NT$9000</del>
            </span>
            <span class="selling-price"> NT$7480 </span>
          </div>

          <!-- 商品特點 -->
          <div class="product-item-feature">
            <ul class="heading product-item-feature-lists">
              <li>
                <span>箱身專利 PC+ABS 材質</span>
              </li>
              <li>
                <span>TSA007海關鎖</span>
              </li>
              <li>
                <span> 日本頂級靜音大八輪 </span>
              </li>
            </ul>
          </div>

          <!-- 控制數量 -->
          <div class="product-item-quantity">
            <div class="product-item-quantity-box">
              <span class="product-item-quantity-title fz-14">數量</span>
              <div class="product-item-quantity-counts">
                <div class="QTY-selector">
                  <a href="javascript:void(0);" class="QTY-selector-btn quantity-reduce">
                    <i class="bi bi-dash"></i>
                  </a>
                  <input
                    type="text"
                    class="QTY-selector-currentNum product-item-num fz-12"
                    value="2"
                  />
                  <a href="javascript:void(0);" class="QTY-selector-btn quantity-plus">
                    <i class="bi bi-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-item-btnGroup">
            <button class="cart-chcekout-btn btn-full">放入購物車</button>
          </div>
        </div>

        <div class="product-detail-infoBox">
          <!-- 摺疊區域 -->
          <div class="product-item-collapsible-lists">
            <div class="product-item-collapsible">
              <button class="product-item-collapsible-btn fz-14">
                <span class="plus-icon"></span>
                <span class="product-item-collapsible-title">商品特色</span>
              </button>

              <div class="product-item-collapsible-inner">
                <div class="product-item-collapsible-content">
                  <p>箱身專利PC+ABS材質</p>
                  <p>多段式鋁合金拉桿</p>
                  <p>TSA007海關密碼鎖</p>
                  <p>專利雙齒防盜拉鍊</p>
                  <p>側邊拉鍊收納袋</p>
                  <p>側邊軟質手把</p>
                  <p>側邊防撞腳墊</p>
                  <p>日本頂級靜音大八輪</p>
                </div>
              </div>
            </div>

            <div class="product-item-collapsible">
              <button class="product-item-collapsible-btn fz-14">
                <span class="plus-icon"></span>
                <span class="product-item-collapsible-title">商品規格</span>
              </button>

              <div class="product-item-collapsible-inner">
                <div class="product-item-collapsible-content">
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
                </div>
              </div>
            </div>

            <div class="product-item-collapsible">
              <button class="product-item-collapsible-btn fz-14">
                <span class="plus-icon"></span>
                <span class="product-item-collapsible-title">購物須知</span>
              </button>

              <div class="product-item-collapsible-inner">
                <div class="product-item-collapsible-content">
                  <div class="msgArea">
                    <ul class="fz-14">
                      <li>
                        請注意！本網站商品數量眾多，多少會產生缺貨或停售之情況，下單成功或匯款成功不代表實質交易完成。我們仍保有保留接受訂單與否的權利。
                      </li>

                      <li>
                        每台電腦因螢幕解析度不同，多少會有些許色差，物品皆以實品顏色為標準，若您是對顏色標準相當嚴格之買家，請謹慎確認再訂購。
                      </li>

                      <li>下標前請慎選款式及顏色並仔細詳閱商品、價格、運費等相關事宜。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-item-collapsible">
              <button class="product-item-collapsible-btn fz-14">
                <span class="plus-icon"></span>
                <span class="product-item-collapsible-title">退換貨須知</span>
              </button>

              <div class="product-item-collapsible-inner">
                <div class="product-item-collapsible-content">
                  <div class="msgArea">
                    <ul class="fz-14">
                      <li>退換貨及訂單相關問題請先與我們聯繫，我們將在第一時間協助後續處理。</li>

                      <li>
                        原廠外盒及原廠包裝都屬於商品的一部分，遺失、毀損或缺件，都可能影響您退貨的權益，也將依損毀程度扣除所需之整新費用。
                      </li>

                      <li>
                        「猶豫期」非「試用期」，在您還不確定是否要辦理退貨以前，請勿拆封！一經拆封則依消費者保護法之規定，無法享有七天猶豫期之權益且不得辦理退貨。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
