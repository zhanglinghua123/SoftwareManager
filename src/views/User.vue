<template>
  <div class="container">
    <el-dialog title="用户注册" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
      <el-form :model="form">
        <el-form-item label="用户名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" @input="signUp1"></el-input>
          <p :style="{
            line_height:'normal',
            position:'relative',
            top:'10px'
          }"
             v-if="signUpUseName">您输入的用户名称应该在6~18个字符之间</p>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" @input="signUp2"></el-input>
          <p :style="{
            line_height:'normal',
            position:'relative',
            top:'10px'
          }"
             v-if="signUpPwd">您输入的密码应该在6~18个字符之间</p>
        </el-form-item>
        <el-form-item label="电子邮箱地址" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" @input="signUp3"></el-input>
          <p :style="{
            line_height:'normal',
            position:'relative',
            top:'10px'
          }"
             v-if="signUpEmail">您输入的电子邮箱格式不对!</p>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="SignUp">确 定</el-button>
      </div>
    </el-dialog>
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input type="text" name="username" placeholder="username"  v-model="useName" class="input-item">
        <p class="message" v-if="useTest">您输入的用户名应该在6~18个字符之间</p>
        <input type="password" name="password" placeholder="password" v-model="usePassword" class="input-item">
        <p class="message" v-if="pwdTest">您输入的密码应该在6~18个字符之间</p>
        <input type="button" value="Login" @click="Signin" class="btn">
      </div>
      <div class="msg">
        Don't have account?
        <a href="#" @click="dialogFormVisible = true">Sign up</a>
        <!--        <button class="btn2" @click="">Signup</button>-->
      </div>
    </div>
  </div>
</template>

<script>
// import {Signup,Signin} from "@/Network/Sign";
export default {
  name: "User",
  data(){
    return {
      useName :'',
      usePassword:'',
      signUpUseName:false,
      signUpPwd:false,
      signUpEmail:false,
      dialogFormVisible: false,
      formLabelWidth:'120px',
      form: {
        name: '',
        password:"",
        email:"",
      },
    }
  },
  methods:{
    Signin(){
      console.log(this.useName,this.usePassword);
      if(this.useTest == true || this.pwdTest == true || this.useName == ""||this.usePassword == "")
      {
        this.$message({
          showClose: true,
          message: '请输入正确格式的账户与密码',
          type: 'error'
        })
      }
      else
        Signin(this.useName,this.usePassword).then(value=>{
          console.log(value.data)
          if(value.data.length == 0)
            this.$message({
              showClose: true,
              message: '登录失败,请重新进行输入',
              type: 'error'
            })
          else
          {
            console.log(value.data.token);
            localStorage.setItem("token", value.data.token);
            this.$message({
              showClose: true,
              message: '登录成功!',
              type: 'success'
            })
            this.$store.commit("changeUserName",this.useName)
            this.$router.push("/Home");
          }
        }).catch(error=>{
              console.log(error);
              this.$message({
                showClose: true,
                message: '登录失败',
                type: 'error'
              })
            }
        );
    },
    SignUp(){
      this.dialogFormVisible = false;
      if(this.signUpPwd == true|| this.signUpUseName == true||this.signUpEmail == true||
          this.form.name == ""|| this.form.password ==""|| this.form.email == "")
        this.$message({
          showClose:true,
          message:'注册信息格式不对',
          type:'error'
        })
      else
        Signup(this.form).then(value=>{
          this.$message({
            showClose: true,
            message: '注册成功!',
            type: 'success'
          })
        }).catch(error=>{
          this.$message({
            showClose: true,
            message: '注册失败,用户信息重复',
            type: 'error'
          })
        })
    },
    signUp1(){
      console.log("onchange");
      let length = this.form.name.length;
      if(length==0||length>=6)
        this.signUpUseName = false;
      else
        this.signUpUseName = true;
    },
    signUp2(){
      console.log("onchange");
      let length = this.form.password.length;
      if(length==0||length>=6)
        this.signUpPwd = false;
      else
        this.signUpPwd = true;
    },
    signUp3(){
      console.log("onchange");
      let length = this.form.email.length;
      console.log(/[a-z||0-9]+\@[a-z||0-9]+\.com/.test(this.form.email));
      if(/[a-z||0-9]+\@[a-z||0-9]+\.com/.test(this.form.email)||this.form.email=="")
        this.signUpEmail = false;
      else
        this.signUpEmail = true;
    }
  },
  computed:{
    useTest(){
      return this.useName.length>=6||this.useName.length==0?false:true;
    },
    pwdTest(){
      return this.usePassword.length>=6||this.usePassword.length==0?false:true;
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  width:100vw;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
}
.login-wrapper {
  background-color: #fff;
  width: 20vw;
  height: 60vh;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  /*这个transform 的百分比是相对于自己的大小来进行的*/
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
/*.input-item:placeholder {*/
/*  text-transform: uppercase;*/
/*}*/
.btn {
  font-size: 16px;
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}
.message{
  position: relative;
  left:10px;
  bottom: 10px;
}
/*.btn2{*/
/*  background-color: #FFFFFF;*/
/*  border:0;*/
/*  font-size: 14px;*/
/*  color:#3a8ee6;*/
/*  position: relative;*/
/*  bottom: 1px;*/
/*}*/
</style>