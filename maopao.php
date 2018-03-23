
<?php
$arr = array(1,43,54,62,21,66,32,78,36,76,39);
function Maopao($arr)
{
    $len = count($arr);
    echo "<pre>";
    print_r($arr);
    $tmp = [];
    for($i=0;$i<$len;++$i){

        for($k=0;$k<$len-$i;++$k)
        {
            if($arr[$k]>$arr[$k+1]){
              $tmp = $arr[$k+1];
              $arr[$k+1]=$arr[$k];  
              $arr[$k]=$tmp; 
            }
        }
    }
    print_r($tmp);
    echo "<pre>";
    print_r($arr);exit;
    return $arr;
}
Maopao($arr);
?>