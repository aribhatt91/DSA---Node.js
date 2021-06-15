/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let m = -1 ,m1 = -1,m2 = -1;
    if((nums1.length + nums2.length) % 2 === 0){
        m1 = (nums1.length + nums2.length)/2;
        m2 = m1+1;
    }else {
        m = Math.ceil((nums1.length + nums2.length)/2);
    }
    console.log(m, m1,m2);
    if(nums1.length === 0 && nums2.length === 0){
        return 0;
    }else if(nums1.length === 0 || nums2.length === 0){
        let arr = nums1.length === 0 ? nums2 : nums1;
        if(m > -1){
            return [arr[m-1]];
        }else {
            return (arr[m1-1] + arr[m2-1])/2;
        }
    }

    let i=0, j=0, p = null, count = 0, md1=-1, md2=-1;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            p = nums1[i];
            count++;
            i++;
        }else if(nums1[i] > nums2[j]){
            p = nums2[j];
            count++;
            j++;
        }else if(nums1[i] === nums2[j]){
            p = nums1[i];
            count += 2;
            i++;j++;
            if(m>-1 && (count - 1) === m){
                return p;
            }else if(m1 > -1 && m2 > -1 && (count - 1 === m1)){
                console.log('hhhh', count, i,j);
                if(count === nums1.length) {
                    md1 = p;
                    md2 = nums2[j];
                    return (md1+md2)/2;
                }else if(count === nums2.length) {
                    md1 = p;
                    md2 = nums1[i];
                    return (md1+md2)/2;
                }
            }
            

        }
        console.log('w1', p, i, j, count);
        if(m > -1 && count === m){
            return p;
        }else if(m1 > -1 && m2 > -1 && count === m1){
            if(count === m1){
                md1 = p;
            }else if(count === m2){
                md2 = p;
                return (m1+m2)/2;
            }
        }
    }
    console.log('ow', i, j, 'c', count, 'l', nums1.length, nums2.length, 'm', m, m1, m2);
    if(i<nums1.length){
        console.log('i<nums1.length');
        if(m>-1){
            while(count<m){
                p = nums1[i++];
                count++;
            }
            return p;
        } else if(m1>-1 && m2>-1){
            if(count < m1){
                while(count<m1){
                    p = nums1[i];
                    i++;
                    count++;
                }
                md1 = p;
                md2 = nums1[i+1];
            }else if(count === m1 && md1 === -1){
                md1 = nums1[j];
                md2 = nums1[j+1];
                console.log('c3', md1, md2);
                
            }else {
                md2 = nums1[j];
                console.log('c4', j, count, md1);
            }
            return (md1+md2)/2;
        }
    }
    else if(j<nums2.length){
        console.log('j<nums2.length');
        if(m>-1){
            console.log('c1');
            while(count<m){
                p = nums2[j++];
                count++;
            }
            return p;
        } else if(m1>-1 && m2>-1){
            if(count < m1){
                console.log('c2');
                while(count<m1){
                    p = nums2[j++];
                    count++;
                    console.log('b',p);
                }
                console.log('bb',p);
                md1 = nums2[j];
                md2 = nums2[j+1];
            }else if(count === m1 && md1 === -1){
                md1 = nums2[j];
                md2 = nums2[j+1];
                console.log('c3', md1, md2);
            }else {
                md2 = nums2[j];
                console.log('c4', j, count, md1, md2);
            }
            return (md1+md2)/2;
        }
    }
};

console.log(findMedianSortedArrays([0,0], [0,0]));