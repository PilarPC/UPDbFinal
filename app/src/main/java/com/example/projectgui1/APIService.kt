package com.example.projectgui1

import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST


interface APIService {

    @POST("/registrarCorreo")
    suspend fun agregarPersona(@Body persona:Persona):Call<Persona>
    @POST("aregar/Wachlist")
    suspend fun agregarPeliculaWachlist(@Body titulo:NP):Call<ResponseBody>
    @GET("/getTop/Peliculas")
    suspend fun getTopP(): Response<List<Peliculas>>
    @GET("/getTop/Series")
    suspend fun getTopS(): Response<List<Series>>
    @GET("/getWachlist/Peliculas")
    suspend fun getWachlistP(): Response<List<Peliculas>>
    @GET("/getWatched/Peliculas")
    suspend fun getWatchedP(): Response<List<Peliculas>>
    @GET("/getWatched/Series")
    suspend fun getWatchedS(): Response<List<Series>>
    @GET("/getWachlist/Series")
    suspend fun getWachlistS(): Response<List<Series>>
    @GET("/getNoticias")
    suspend fun getNoti():Response<List<Noticias>>

}


