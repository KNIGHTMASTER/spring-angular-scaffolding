package com.wissensalt.rnd.sas;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Created on 6/19/19.
 *
 * @author <a href="mailto:fauzi.knightmaster.achmad@gmail.com">Achmad Fauzi</a>
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResponseData {
    private String responseCode;
    private String responseMsg;
}
