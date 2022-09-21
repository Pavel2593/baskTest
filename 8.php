<?
function calc($levels) {
    $result = 0;
    for ($i = 1; $i <= $levels; $i++) {
        $result += $i;
    }

    return $result;
}
echo calc(2)
?>