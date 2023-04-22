<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GuestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['login','signup']);
    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email'=>['required'],
            'password'=>['required'],
        ]);
        if(!Auth::attempt($credentials)){
            return response()->json([
                'message'=>'email not provided'
            ]);
        }
        $user = User::where('id',Auth::id())->with('role')->first();
        if($user->role->name==='admin'){
            $token = $user->createToken($user->email,['server:admin'])->plainTextToken;
        }else if($user->role->name==='user'){
            $token = $user->createToken($user->email,['server:user'])->plainTextToken;
        }else{
            abort(405,'No token and user has been generate');
        }
        return response()->json([
            'user'=>$user,
            'token'=>$token
        ]);
    }


    public function logout(){
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }

    public function signup(Request $request){

        $request->validate([
            'name'=>['required'],
            'email'=>['required','email','unique:users,email'],
            'password'=>['required'],
            'password_confirm'=>['required']
        ]);

         $user = User::query()->create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'email_verified_at'=>now()
         ]);

        //$token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user'=>$user,
            // 'token'=>$token
        ]);
    }

}
