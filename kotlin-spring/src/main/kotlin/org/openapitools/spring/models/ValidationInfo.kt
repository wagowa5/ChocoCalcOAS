package org.openapitools.spring.models

import java.util.Objects
import com.fasterxml.jackson.annotation.JsonProperty
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
 * @param &#x60;field&#x60; 対象のフィールド名
 * @param rejectedValue 不正な入力値
 * @param message バリデーションメッセージ
 */
data class ValidationInfo(

    @Schema(example = "null", required = true, description = "対象のフィールド名")
    @field:JsonProperty("field", required = true) val `field`: kotlin.String,

    @Schema(example = "null", required = true, description = "不正な入力値")
    @field:JsonProperty("rejectedValue", required = true) val rejectedValue: kotlin.String,

    @Schema(example = "null", required = true, description = "バリデーションメッセージ")
    @field:JsonProperty("message", required = true) val message: kotlin.String
) {

}

