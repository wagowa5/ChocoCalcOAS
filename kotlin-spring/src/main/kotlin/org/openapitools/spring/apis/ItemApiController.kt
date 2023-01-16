package org.openapitools.spring.apis

import org.openapitools.spring.models.Error
import io.swagger.v3.oas.annotations.*
import io.swagger.v3.oas.annotations.enums.*
import io.swagger.v3.oas.annotations.media.*
import io.swagger.v3.oas.annotations.responses.*
import io.swagger.v3.oas.annotations.security.*
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity

import org.springframework.web.bind.annotation.*
import org.springframework.validation.annotation.Validated
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.beans.factory.annotation.Autowired

import javax.validation.Valid
import javax.validation.constraints.DecimalMax
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Email
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size

import kotlin.collections.List
import kotlin.collections.Map

@RestController
@Validated
@RequestMapping("\${api.base-path:}")
class ItemApiController() {

    @Operation(
        summary = "魔獣缶・シールを使用",
        operationId = "apiItemCanPost",
        description = "魔獣缶・シールを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/can"],
        produces = ["application/json"]
    )
    fun apiItemCanPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "アタークリキッドを使用",
        operationId = "apiItemLiquidAtkPost",
        description = "アタークリキッドを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/liquid/atk"],
        produces = ["application/json"]
    )
    fun apiItemLiquidAtkPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "マモールリキッドを使用",
        operationId = "apiItemLiquidDefPost",
        description = "マモールリキッドを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/liquid/def"],
        produces = ["application/json"]
    )
    fun apiItemLiquidDefPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "マホアタリキッドを使用",
        operationId = "apiItemLiquidMatPost",
        description = "マホアタリキッドを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/liquid/mat"],
        produces = ["application/json"]
    )
    fun apiItemLiquidMatPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "マホマモリキッドを使用",
        operationId = "apiItemLiquidMdfPost",
        description = "マホマモリキッドを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/liquid/mdf"],
        produces = ["application/json"]
    )
    fun apiItemLiquidMdfPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "ALLビタを使用",
        operationId = "apiItemVitaAllPost",
        description = "ALLビタを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/vita/all"],
        produces = ["application/json"]
    )
    fun apiItemVitaAllPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "INTビタを使用",
        operationId = "apiItemVitaIntPost",
        description = "INTビタを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/vita/int"],
        produces = ["application/json"]
    )
    fun apiItemVitaIntPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "LUKビタを使用",
        operationId = "apiItemVitaLukPost",
        description = "LUKビタを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/vita/luk"],
        produces = ["application/json"]
    )
    fun apiItemVitaLukPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "POWビタを使用",
        operationId = "apiItemVitaPowPost",
        description = "POWビタを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/vita/pow"],
        produces = ["application/json"]
    )
    fun apiItemVitaPowPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "SPDビタを使用",
        operationId = "apiItemVitaSpdPost",
        description = "SPDビタを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/vita/spd"],
        produces = ["application/json"]
    )
    fun apiItemVitaSpdPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "VITビタを使用",
        operationId = "apiItemVitaVitPost",
        description = "VITビタを使用 ",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/item/vita/vit"],
        produces = ["application/json"]
    )
    fun apiItemVitaVitPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }
}
