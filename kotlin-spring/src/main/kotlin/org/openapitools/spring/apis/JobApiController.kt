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
class JobApiController() {

    @Operation(
        summary = "職業情報読み込み",
        operationId = "apiUserJobGet",
        description = "",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.GET],
        value = ["/api/user/job"],
        produces = ["application/json"]
    )
    fun apiUserJobGet(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }

    @Operation(
        summary = "職業情報登録",
        operationId = "apiUserJobPost",
        description = "",
        responses = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(schema = Schema(implementation = kotlin.String::class))]),
            ApiResponse(responseCode = "400", description = "リクエスト不正エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "401", description = "認証エラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "408", description = "TimeOutエラー", content = [Content(schema = Schema(implementation = Error::class))]),
            ApiResponse(responseCode = "500", description = "システムエラー", content = [Content(schema = Schema(implementation = Error::class))]) ]
    )
    @RequestMapping(
        method = [RequestMethod.POST],
        value = ["/api/user/job"],
        produces = ["application/json"]
    )
    fun apiUserJobPost(): ResponseEntity<kotlin.String> {
        return ResponseEntity(HttpStatus.NOT_IMPLEMENTED)
    }
}
