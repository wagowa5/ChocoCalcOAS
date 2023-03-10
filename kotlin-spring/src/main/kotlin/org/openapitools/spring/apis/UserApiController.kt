package org.openapitools.spring.apis

import org.openapitools.spring.models.Error
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.validation.annotation.Validated
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.beans.factory.annotation.Autowired

import javax.validation.Valid
import javax.validation.constraints.DecimalMax
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size

import kotlin.collections.List
import kotlin.collections.Map

/**
 * 実装クラスに持っていく
 * @RestController
 * @Validated
 * @RequestMapping("\${api.base-path:}")
 */
abstract class UserApiBaseController {
    /**
     * 実装クラスに持っていく
     * @RequestMapping(
     *   value = ["/api/user"],
     *   produces = ["application/json"], 
     *   method = [RequestMethod.GET])
     * @ResponseStatus(HttpStatus.OK)
     */
    abstract fun apiUserGet(): kotlin.String

    /**
     * 実装クラスに持っていく
     * @RequestMapping(
     *   value = ["/api/user"],
     *   produces = ["application/json"], 
     *   method = [RequestMethod.POST])
     * @ResponseStatus(HttpStatus.OK)
     */
    abstract fun apiUserPost(): kotlin.String

}
