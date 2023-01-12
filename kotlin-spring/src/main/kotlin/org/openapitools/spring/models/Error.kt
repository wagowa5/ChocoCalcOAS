package org.openapitools.spring.models

import java.util.Objects
import com.fasterxml.jackson.annotation.JsonProperty
import org.openapitools.spring.models.ValidationInfo
import javax.validation.constraints.DecimalMax
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Email
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size
import javax.validation.Valid
import io.swagger.v3.oas.annotations.media.Schema

/**
 * 
 * @param code 
 * @param link ログサービスの該当エラーに対するリンク
 * @param message 
 * @param validationInfo バリデーション情報の配列
 * @param browserLink エラー時に案内するページのリンク
 * @param numberOfBackScreen 何画面前に戻る必要があるか
 */
data class Error(

    @Schema(example = "null", required = true, description = "")
    @field:JsonProperty("code", required = true) val code: kotlin.Int,

    @Schema(example = "null", required = true, description = "ログサービスの該当エラーに対するリンク")
    @field:JsonProperty("link", required = true) val link: kotlin.String,

    @Schema(example = "null", required = true, description = "")
    @field:JsonProperty("message", required = true) val message: kotlin.String,

    @field:Valid
    @Schema(example = "null", description = "バリデーション情報の配列")
    @field:JsonProperty("validationInfo") val validationInfo: kotlin.collections.List<ValidationInfo>? = null,

    @Schema(example = "null", description = "エラー時に案内するページのリンク")
    @field:JsonProperty("browserLink") val browserLink: kotlin.String? = null,

    @Schema(example = "null", description = "何画面前に戻る必要があるか")
    @field:JsonProperty("numberOfBackScreen") val numberOfBackScreen: kotlin.Int? = null
) {

}

