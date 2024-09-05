
<?php

include_once('model.php'); 


class control extends model   
{
	function __construct()
	{
		
		session_start();
		
		model::__construct();   
		
		$url=$_SERVER['PATH_INFO']; 
		
		switch($url)
		{
			
			
			
			case '/manage_posts':	
				$res=$this->select('posts');
				$count=count($res); 
				if($count > 0)
				{	
					echo json_encode($res);
				}
				else
				{	
					echo json_encode(array("message" => "No Posts Found.", "status" => false));
				}
			break;
			
			case '/posts_single_get':	
	
				$id = $_GET['id'];			
				$where=array("id"=>$id);
				$chk=$this->select_where('posts',$where);
				$res=$chk->fetch_object();
				if($res)
				{	
					echo json_encode($res);
				}
				else
				{	
					echo json_encode(array("message" => "No Posts Found.", "status" => false));
				}
			break;
			
			case '/posts_post':	
			
				$data_arr = json_decode(file_get_contents("php://input"), true);
				$title = $data_arr["title"]; 
                $desc = $data_arr["desc"];
				$image = $data_arr["image"];
				
				$filename=$_POST['image']['name'];
				$path='upload/post/'.$filename;
				$tmp_path=$_POST['image']['tmp_name'];
				move_uploaded_file($path,$tmp_path);
				
				
				
				$arr=array("title"=>$title,"desc"=>$desc,"image"=>$image);
				
				$res=$this->insert('posts',$arr);
				if($res or die("Insert Query Failed"))
				{
					echo json_encode(array("message" => "Post Inserted Successfully", "status" => true));	
				}
				else
				{
					echo json_encode(array("message" => "Post Contacts Not Inserted ", "status" => false));	
				}
			break;
			
			case '/posts_delete':	
			
				$id = $_GET['id'];
				$where=array("id"=>$id);
				$res=$this->delete('posts',$where);
				if($res or die("Delete Query Failed"))
				{	
					echo json_encode(array("message" => "Post Delete Successfully", "status" => true));	
				}
				else
				{	
					echo json_encode(array("message" => "Failed Post Not Deleted", "status" => false));	
				}
			break;
			
			case '/posts_put':	
				
				$data_arr = json_decode(file_get_contents("php://input"), true);
				
				$id = $data_arr["id"];
				$title = $data_arr["title"];
                $desc=$data_arr["desc"];
				$image = $data_arr["image"];
				
				
				$arr=array("title"=>$title,"desc"=>$desc,"image"=>$image);
				$where=array("id"=>$id);
				
				$res=$this->update_where('posts',$arr,$where);
				
				if($res or die("Update Query Failed"))
				{	
					echo json_encode(array("message" => "Post Update Successfully", "status" => true));	
				}
				else
				{	
					echo json_encode(array("message" => "Failed Post Not Update", "status" => false));	
				}
			break;				
		}
	}
}

$obj=new control;

?>